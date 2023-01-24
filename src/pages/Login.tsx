import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider/useAuth";
import Input from "../components/form/Input";
import Form from "../components/shared/Form";

const Login = () => {
  const auth = useAuth();
  const navegation = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      await auth.authenticate(email, password);
      navegation("/perfil");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form handleSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          id="email"
          label="Email"
          values={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          name="password"
          id="password"
          label="Password"
          values={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </Form>
    </>
  );
};

export { Login };
