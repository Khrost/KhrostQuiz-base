import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => {
      return theme.colors.mainBg;
    }
  };
  border-radius: 4px;
  overflow:hidden;

  //codigo para a fonte
  height, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p{
    font-size:14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;//alinhando verticalmente
  padding: 18px 32px;//aumenta a distancia de padding
  background-color: ${({ theme }) => theme.colors.primary};

  *{
    margin: 0;
  }
`;

Widget.Content = styled.header`
  padding: 24px 31px 32px 32px;
  & > *:first-child{
    margin-top:0;
  }
  & > *::first-child{
    margin-bottom: 0;
  }
  ul{
    list-style: none;//tirando o stilo de lista
    padding: 0;
  }
`;

export default Widget;