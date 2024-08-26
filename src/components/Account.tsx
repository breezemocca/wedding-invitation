import styled from '@emotion/styled';
const AccountWrap = dynamic(() => import("@/components/AccountWrap"), { ssr: false });
const Accordion = dynamic(() => import("@/components/Accordion"), { ssr: false });
import dynamic from "next/dynamic";
import {Divider} from "antd";

type AccountProps = {
  data?: Data;
};


const Content = styled.div`
  font-size: 16px;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
`;

const Title = styled.p`
  font-size: 50px;
  fontWeight: "bold";
  opacity: 0.85;
  marginBottom: 0;
`;

const Account = ({ data }: AccountProps) => {
  const  hostInfo  = [
    {
      host: "신랑측",
      accountInfo: [
        {
          name: "심명훈",
          relation: "신랑",
          bank: "기업은행",
          account: "389-077862-01-016",
        },
        {
          name: "심문보",
          relation: "아버지",
          bank: "새마을금고",
          account: "9003-2105-53825"
        },
        {
          name: "조재연",
          relation: "어머니",
          bank: "농협",
          account: "835-1212-8398"
        }
      ]
    },
    {
      host: "신부측",
      accountInfo: [
        {
          name: "장혜원",
          relation: "신부",
          bank: "국민은행",
          account: "60640204106456",
          kakaopayAccount: "",
          tossAccount: ""
        },
        {
          name: "장선규",
          relation: "아버지",
          bank: "신한은행",
          account: "110-461-458065"
        },
        {
          name: "김점숙",
          relation: "어머니",
          bank: "신한은행",
          account: "948-04-372397"
        }
      ]
    }
  ];

  if (!hostInfo) {
    return <div>No host information available.</div>;
  }
  return (
    <HostInfoWrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>💌</Title>
      </Divider>
      <Content style={{paddingBottom:30}}>
        참석이 어려우신 분들을 위해<br />
        계좌번호를 기재하였습니다.<br />
        너그러운 마음으로 양해 부탁드립니다.
      </Content>
      {hostInfo.map((host) => {
        return (
          <Accordion title={host.host} key={host.host}>
            {host.accountInfo.map((account) => {
              return (
                <AccountWrap
                  key={account.name}
                  name={account.name}
                  relation={account.relation}
                  bank={account.bank}
                  account={account.account}
/*
                  kakaopayAccount={account.kakaopayAccount}
                  tossAccount={account.tossAccount}
*/
                />
              );
            })}
          </Accordion>
        );
      })}
    </HostInfoWrapper>
  );
};

export default Account;

const HostInfoWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
  background-image: url('/assets/GroovePaper.png');
`;
