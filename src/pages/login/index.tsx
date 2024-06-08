import { User, Lock } from "@phosphor-icons/react";
import { Input } from "../../components/Input";
import * as S from "./styles";
import { Button } from "../../components/Button";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginUser } from "../../services/userServices";
import { UserInterface } from "../../services/types/userType";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [passWord, setPassWord] = useState<string>("");

  const handleChangeEmail = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleChangePassWord = (e: { target: { value: string } }) => {
    const { value } = e.target;

    setPassWord(value);
  };

  const sendSign = () => {
    navigate("/signup");
  };

  const sendHome = () => {
    navigate("/dashboard");
  };

  const LoginData: UserInterface = {
    email: email,
    password: passWord,
  };

  const login = async () => {
    const response = await LoginUser(LoginData);
    if (response?.status == 200) {
      alert("Usuário logado com sucesso");
      sendHome();
    }
    if (response?.status == 403 || response?.status == 400) {
      alert("email e/ou senha incorretos");
    }
  };
  return (
    <S.Container>
      <S.FormArea>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <Input
            placeholder={"Email"}
            color="#f5f6fa"
            secondColor="#244bc5"
            leftIcon={<User size={16} color="#f5f6fa" />}
            inputFunction={handleChangeEmail}
          />
        </div>
        <div>
          <Input
            placeholder={"Senha"}
            color="#f5f6fa"
            secondColor="#244bc5"
            leftIcon={<Lock size={16} color="#f5f6fa" />}
            inputFunction={handleChangePassWord}
          />
        </div>
        <div>
          <Button
            label="Login"
            color="#244bc5"
            secondColor="#f5f6fa"
            shape="round"
            buttonFunction={login}
          />
        </div>

        <S.Line style={{ borderTop: "1px solid #f5f6fa" }} />

        <div>
          <S.Link>
            Não é cadastrado? | <label onClick={sendSign}>Cadastrar</label>
          </S.Link>
        </div>
      </S.FormArea>
    </S.Container>
  );
}
