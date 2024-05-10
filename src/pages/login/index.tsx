import { Input } from "../../components/input";
import * as S from "./styles";

export function Login() {
  return (
    <S.Container>
      <S.FormArea>
        <div>logo</div>
        <div>
          <Input placeholder={"Email"} color="#f5f6fa" />
        </div>
        <div>
          <Input placeholder={"Senha"} color="#f5f6fa" />
        </div>
        <div>botao</div>
        <div>linha</div>
        <div>link</div>
      </S.FormArea>
    </S.Container>
  );
}
