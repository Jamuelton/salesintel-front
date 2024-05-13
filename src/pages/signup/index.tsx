import { User, Lock, At, ArrowCircleLeft } from "@phosphor-icons/react";
import { Input } from "../../components/Input";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RegisterSchema } from "../../services/types/signType";

interface ErrorInterface {
  errorType: "" | "warning" | "error" | undefined;
  errorShow: boolean;
}

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [passWord, setPassWord] = useState<string>();

  const [errorName, setErrorName] = useState<ErrorInterface>();
  const [errorEmail, setErrorEmail] = useState<ErrorInterface>();
  const [errorPassword, setErrorPassword] = useState<ErrorInterface>();

  const handleChangeEmail = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      RegisterSchema.shape.email.parse(value);
      setErrorEmail({ errorType: "", errorShow: false });
    } catch (error) {
      setErrorEmail({ errorType: "error", errorShow: true });
    }
    setEmail(value);
  };

  const handleChangeName = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      RegisterSchema.shape.name.parse(value);
      setErrorName({ errorType: "", errorShow: false });
    } catch (error) {
      setErrorName({ errorType: "error", errorShow: true });
    }
    setName(value);
  };

  const handleChangePassWord = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      RegisterSchema.shape.password.parse(value);
      setErrorPassword({ errorType: "", errorShow: false });
    } catch (error) {
      setErrorPassword({ errorType: "error", errorShow: true });
    }
    setPassWord(value);
  };

  const backLogin = () => {
    navigate("/login");
  };

  const sign = () => {
    console.log("Empresa: " + name);
    console.log("Email: " + email);
    console.log("Senha: " + passWord);
    backLogin();
  };

  return (
    <S.Container>
      <S.FormArea>
        <div>
          <h2>Sales Intel</h2>
        </div>
        <div>
          <Input
            placeholder={"Empresa"}
            color="#244bc5"
            secondColor="#f5f6fa"
            leftIcon={
              <User
                size={16}
                color={errorName?.errorType == "error" ? "#da033c" : "#244bc5"}
              />
            }
            inputFunction={handleChangeName}
            status={errorName?.errorType}
            errorText={
              "O nome da empresaa precisa ter entre 2 e 20 caracteres."
            }
          />
        </div>
        <div>
          <Input
            placeholder={"Email"}
            color="#244bc5"
            secondColor="#f5f6fa"
            leftIcon={
              <At
                size={16}
                color={errorEmail?.errorType == "error" ? "#da033c" : "#244bc5"}
              />
            }
            inputFunction={handleChangeEmail}
            status={errorEmail?.errorType}
            errorText={"O email precisa ser válido."}
          />
        </div>
        <div>
          <Input
            placeholder={"Senha"}
            color="#244bc5"
            secondColor="#f5f6fa"
            leftIcon={
              <Lock
                size={16}
                color={
                  errorPassword?.errorType == "error" ? "#da033c" : "#244bc5"
                }
              />
            }
            inputFunction={handleChangePassWord}
            status={errorPassword?.errorType}
            errorText={"A senha precisa ter pelo menos 8 caracteres."}
          />
        </div>
        <div>
          <Button
            label="Cadastrar"
            color="#f5f6fa"
            secondColor="#244bc5"
            shape="round"
            buttonFunction={sign}
          />
        </div>

        <S.Line style={{ borderTop: "1px solid #244bc5" }} />

        <div>
          <ArrowCircleLeft
            size={36}
            weight="fill"
            color="#244bc5"
            onClick={backLogin}
          />
        </div>
      </S.FormArea>
    </S.Container>
  );
}
