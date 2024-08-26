type AccountInfo = {
  name: string;
  relation: string;
  bank: string;
  account: string;
  kakaopayAccount?: string;
  tossAccount?: string;
};

type HostInfo = {
  host: string;
  accountInfo: AccountInfo[];  // 배열로 변경
};

type Data = {
  date: string;
  location: string;
  gretting: string;
  host: {
    groom: {
      name: string;
      account_number: string;
      parents: {
        mother: {
          name: string;
          account_number: string;
        };
        father: {
          name: string;
          account_number: string;
        };
      };
    };
    bride: {
      name: string;
      account_number: string;
      parents: {
        mother: {
          name: string;
          account_number: string;
        };
        father: {
          name: string;
          account_number: string;
        };
      };
    };
  };
  kakaotalk: {
    api_token: string;
    wedding_invitation_url: string;
    share_image: string;
  };
  mapInfo: {
    address1: string;
    address2: string;
    naverMap: string;
    kakaoMap: string;
    lat: number;
    lon: number;
  };
  hostInfo: HostInfo[];  // 배열로 정의
};
