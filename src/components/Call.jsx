import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";
import { FcCallback } from "react-icons/fc";

const Call = () => {
  return (
    <Wrapper>
      <div className="top-btn">
        <a href="tel:%2B918207637632" target="_blank" rel="noopener noreferrer">
          <FcCallback />
        </a>
      </div>
      <div className="top-wa bg-primary">
        <a
          href="https://wa.me/+918207637632"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp />
        </a>
      </div>
      <script src="https://cdn.pulse.is/livechat/loader.js" data-live-chat-id="656f298ef77b520c620edaeb" async></script>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 1.5rem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    background-color: #333; /* Replace with your primary color */
    border-radius: 50%;
    position: fixed;
    bottom: 8rem;
    right: 3rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  .top-wa {
    font-size: 1.5rem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    background-color: #4caf50; /* Replace with your secondary color */
    border-radius: 50%;
    position: fixed;
    bottom: 4rem;
    right: 3rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
`;

export default Call;
