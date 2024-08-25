import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { format, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";
import { ko } from "date-fns/locale";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import {Divider} from "antd";

const Wrapper = styled.div`
  //background: #fdfdfd;
  border-radius: 10px;
  padding: 40px 20px;
  max-width: 420px;
  margin: 0 auto;
  text-align: center;
  //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  backgroundImage: "url(./assets/GroovePaper.png)";

`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
`;

const StyledCalendar = styled(Calendar)`
  margin: 20px auto;
  border: none;
  width: 100%;

  .react-calendar__tile--now {
    background: transparent;
  }
  
  .react-calendar__tile--active {
    background: #ff7f7f;
    color: white;
  }

  .react-calendar__navigation {
    display: none; /* 내비게이션 숨기기 */
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
  }

  .react-calendar__month-view__days__day {
    text-align: center;
    font-size: 16px;
  }
`;

const Countdown = styled.div`
  font-size: 16px;
  margin-top: 20px;
`;

const Highlight = styled.span`
  color: #ff7f7f;
  font-weight: bold;
`;

type CalendarProps = {
    data?: Data;
};

export default function WeddingCalendar({ data }: CalendarProps) {
    const weddingDate = new Date("2024-12-22T11:00:00");
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const daysRemaining = differenceInDays(weddingDate, currentDate);
    const hoursRemaining = differenceInHours(weddingDate, currentDate) % 24;
    const minutesRemaining = differenceInMinutes(weddingDate, currentDate) % 60;
    const secondsRemaining = differenceInSeconds(weddingDate, currentDate) % 60;

    const formattedDate = format(weddingDate, "yyyy.MM.dd", { locale: ko });
    const formattedTime = format(weddingDate, "EEEE 오전 hh시", { locale: ko });

    return (
        <Wrapper>
            <Title style={{ paddingTop: 100 }}>{formattedDate}</Title>
            <SubTitle>{formattedTime}</SubTitle>
            <StyledCalendar
                //locale="ko-KR" // 한글 로케일 적용
                locale="en-US"
                value={weddingDate}
                showNeighboringMonth={false} // 다음 달 날짜 숨기기
                formatShortWeekday={(locale, date) =>
                    format(date, "E").slice(0, 1) // 요일을 숫자로 표시
                }
                formatDay={(locale, date) =>
                    format(date, 'd')
                }
            />
            <p></p>
            <Countdown>
                <p>
                    결혼식이 <Highlight>{daysRemaining}일</Highlight> 남았습니다.
                </p>
            </Countdown>
        </Wrapper>
    );
}
