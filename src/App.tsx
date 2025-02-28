// src/App.tsx
import { Layout, Button, Switch, Typography, Space, Card, Divider } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import { useTheme } from './styles/index';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

export const App = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 20px',
        backgroundColor: isDarkMode ? '#141414' : '#f0f2f5',
      }}>
        <Title level={4} style={{ color: isDarkMode ? '#fff' : '#000', margin: 0 }}>
          FarmPro - Soluções em Agro
        </Title>
        <Space>
          <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>
            {isDarkMode ? 'Modo Escuro' : 'Modo Claro'}
          </Text>
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            checkedChildren={<BulbFilled />}
            unCheckedChildren={<BulbOutlined />}
          />
        </Space>
      </Header>
      <Content style={{ padding: '50px', backgroundColor: isDarkMode ? '#141414' : '#f0f2f5' }}>
        <Card>
          <Title level={2}>Configuração do Tema</Title>
          <Paragraph>
            Este é o tema padrão do projeto FarmPro.
          </Paragraph>
          <Divider />
          <Space direction="vertical" size="large">
            <Card title="Demonstração de componentes">
              <Space wrap>
                <Button type="primary">Botão Primário</Button>
                <Button>Botão Padrão</Button>
                <Button type="dashed">Botão Tracejado</Button>
                <Button type="text">Botão Texto</Button>
                <Button type="link">Botão Link</Button>
              </Space>
            </Card>

            <Button
              type="primary"
              size="large"
              onClick={toggleTheme}
              icon={isDarkMode ? <BulbFilled /> : <BulbOutlined />}
            >
              Alternar para {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
            </Button>
          </Space>
        </Card>
      </Content>

      <Footer style={{ textAlign: 'center', backgroundColor: isDarkMode ? '#000' : '#f0f2f5' }}>
        <Text style={{ color: isDarkMode ? '#999' : '#666' }}>
          FarmPro - Soluções em Agro ©{new Date().getFullYear()}
        </Text>
      </Footer>
    </Layout>
  );
};