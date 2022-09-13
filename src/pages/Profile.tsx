import { useQuery } from "react-query";
import { useState } from "react";
import Input from "../components/form/Input";
import Form from "../components/shared/Form";
import Modal from "../components/shared/Modal";
import Table from "../components/shared/Table";
import { IProfile } from "../model/profile";
import { Api } from "../services/api";
import { omit } from "../utils/omit";

const Profile: React.FC = () => {
  const emptyProfile = {
    id: "",
    idLogin: "",
    name: "",
    slogan: "",
    description: "",
    titleSlug: "",
    imageProfile: "",
    banner: "",
    tag: "",
    follower: "",
    point: "",
    vote: "",
  };

  const [profile, setProfile] = useState<any>(emptyProfile);
  const [action, setAction] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);

  const handleInput = (e: any, name: string) => {
    const value = e.target.value;
    const profileValue = { ...profile };
    profileValue[name] = value;
    setProfile(profileValue);
  };

  const handleUpload = (e: any, name: string) => {
    const value = e.target.files[0];
    const profileValue = { ...profile };
    profileValue[name] = value;
    setProfile(profileValue);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setAction(false);
    setProfile(emptyProfile);
  };

  const { data } = useQuery<IProfile[]>(
    "profiles",
    async () => {
      const response = await Api.get("profiles");
      return response.data.profiles;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!profile.id) {
      Api.post("profiles", profile);
    } else {
      if (!profile.action) {
        console.log(profile);
        const datas = omit(profile, "id", "idLogin");
        Api.put(`profiles/${profile.id}`, datas, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        });
      } else {
        Api.delete(`profiles/${profile.id}`);
      }
    }
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        show Modal
      </button>
      <Table
        header={["Nome", "Descrição", "Ação"]}
        body={[data]}
        showColumns={["name", "description"]}
        setAction={setAction}
        setProfile={setProfile}
      />

      <Modal handleClose={closeModal} show={isModalOpen || action}>
        <Form closeModal={closeModal} handleSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            id="name"
            label="Name"
            values={profile.name}
            onChange={(e: any) => handleInput(e, "name")}
          />
          <Input
            type="text"
            name="description"
            id="description"
            label="Description"
            values={profile.description}
            onChange={(e: any) => handleInput(e, "description")}
          />

          <Input
            type="text"
            name="slogan"
            id="slogan"
            label="slogan"
            values={profile.slogan}
            onChange={(e: any) => handleInput(e, "slogan")}
          />
          <Input
            type="text"
            name="titleSlug"
            id="titleSlug"
            label="titleSlug"
            values={profile.titleSlug}
            onChange={(e: any) => handleInput(e, "titleSlug")}
          />
          <input
            type="file"
            name="imageProfile"
            id="imageProfile"
            // values={profile.imageProfile}
            onChange={(e: any) => handleUpload(e, "imageProfile")}
          />
          <input
            type="file"
            name="banner"
            id="banner"
            // values={profile.banner}
            onChange={(e: any) => handleUpload(e, "banner")}
          />
          <Input
            type="text"
            name="tag"
            id="tag"
            label="tag"
            values={profile.tag}
            onChange={(e: any) => handleInput(e, "tag")}
          />
          <Input
            type="text"
            name="follower"
            id="follower"
            label="follower"
            values={profile.follower}
            onChange={(e: any) => handleInput(e, "follower")}
          />
          <Input
            type="text"
            name="point"
            id="point"
            label="point"
            values={profile.point}
            onChange={(e: any) => handleInput(e, "point")}
          />
          <Input
            type="text"
            name="vote"
            id="vote"
            label="vote"
            values={profile.vote}
            onChange={(e: any) => handleInput(e, "vote")}
          />
        </Form>
      </Modal>
    </>
  );
};
export default Profile;
