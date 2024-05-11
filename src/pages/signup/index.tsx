import { User, Lock, At, ArrowCircleLeft } from "@phosphor-icons/react";
import { Input } from "../../components/Input";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();

  const backLogin = () => {
    navigate("/login");
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
            leftIcon={<User size={16} color="#244bc5" />}
          />
        </div>
        <div>
          <Input
            placeholder={"Email"}
            color="#244bc5"
            secondColor="#f5f6fa"
            leftIcon={<At size={16} color="#244bc5" />}
          />
        </div>
        <div>
          <Input
            placeholder={"Senha"}
            color="#244bc5"
            secondColor="#f5f6fa"
            leftIcon={<Lock size={16} color="#244bc5" />}
          />
        </div>
        <div>
          <Button
            label="Cadastrar"
            color="#f5f6fa"
            secondColor="#244bc5"
            shape="round"
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
