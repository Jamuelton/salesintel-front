import { User, Lock, At } from "@phosphor-icons/react";
import { Input } from "../../components/Input";
import * as S from "./styles";
import { Button } from "../../components/Button";

export function SignUp() {
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

        <S.Line style={{ borderBottom: "1px solid #f5f6fa" }} />

        <div>
          <S.Link>
            Não é cadastrado? | <a href="/">Cadastrar</a>
          </S.Link>
        </div>
      </S.FormArea>
    </S.Container>
  );
}
