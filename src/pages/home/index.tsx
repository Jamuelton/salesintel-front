import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <div>navbar</div>
      <S.Content>
        <div>
          <h2>Nome da Empresa</h2>
          <S.Line style={{ borderTop: "1px solid #244bc5" }} />
        </div>
        <div>dashboard</div>
      </S.Content>
    </S.Container>
  );
}
