import { useEffect, useState } from "react";
import Input from "../components/form/Input";
import Form from "../components/shared/Form";
import Modal from "../components/shared/Modal";
import Table from "../components/shared/Table";
import { IProfile } from "../model/profile";
import profileDate from "../services/profile";

const Profile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [profiles, setProfiles] = useState<IProfile[]>([]);

  const closeModal = () => {
    console.log(name);
    setName("");
    setDescription("");
    setIsModalOpen(false);
    console.log(name);
  };

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
    //here is Okay
    const values = { name, description };
    console.log(console.table(values));
  };

  useEffect(() => {
    GetProfileDate();
  }, []);

  return (
    <>
      <button type="button" onClick={openModal}>
        show Modal
      </button>
      <Table header={["Nome", "Descrição", "Ação"]} body={[profiles]} />

      <Modal handleClose={closeModal} show={isModalOpen}>
        <Form closeModal={closeModal} handleSubmit={handleSubmit}>
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
        </Form>
      </Modal>
    </>
  );
};
export default Profile;
