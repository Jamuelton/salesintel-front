import { User, Lock } from "@phosphor-icons/react";
import { Input } from "../../components/Input";
import * as S from "./styles";
import { Button } from "../../components/Button";
import Logo from "../../assets/logo.png";

export function Login() {
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
          />
        </div>
        <div>
          <Input
            placeholder={"Senha"}
            color="#f5f6fa"
            secondColor="#244bc5"
            leftIcon={<Lock size={16} color="#f5f6fa" />}
          />
        </div>
        <div>
          <Button
            label="Login"
            color="#244bc5"
            secondColor="#f5f6fa"
            shape="round"
          />
        </div>

        <S.Line style={{ borderBottom: "1px solid #f5f6fa" }} />

        <div>
          <S.Link>
            Não é cadastrado? | <a href="/signup">Cadastrar</a>
          </S.Link>
        </div>
      </S.FormArea>
    </S.Container>
  );
}
