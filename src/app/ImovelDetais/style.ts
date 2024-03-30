import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ImovelTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ImovelDetails = styled.View`
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const ImovelDetail = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const ImovelPhoto = styled.Image`
  /* Estilos para cada foto do imóvel */
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 5px;
`;


export const ImovelPhotos = styled.ScrollView`
  /* Estilos para a seção de fotos do imóvel */
  flex-direction: row;
  padding: 10px;
`;