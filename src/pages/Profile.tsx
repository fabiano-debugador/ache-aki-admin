import { useEffect, useState } from "react";
import Input from "../components/form/Input";
import Modal from "../components/shared/Modal";
import Table from "../components/shared/Table";
import { IProfile } from "../model/profile";
import profileDate from "../services/profile";

const Profile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [profiles, setProfiles] = useState<IProfile[] | undefined>();

  const GetProfileDate = () => {
    try {
      const profilesData: IProfile[] = profileDate;
      setProfiles(profilesData);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const description = e.target[1].value;

    //here is Okay
    const values = { name, description };
    // console.log(console.table(values));
  };

  useEffect(() => {
    GetProfileDate();
  }, []);

  return (
    <>
      <h1>Profile</h1>
      <button type="button" onClick={openModal}>
        show Modal
      </button>
      <Table header={["Name", "description"]} body={[profiles]} />

      <Modal handleClose={closeModal} show={isModalOpen}>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            id="name"
            label="Name"
            onChange={(e: any) => setName(e.target.value)}
          />
          <Input
            type="text"
            name="description"
            id="description"
            label="Description"
            onChange={(e: any) => setDescription(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      </Modal>
    </>
  );
};
export default Profile;
