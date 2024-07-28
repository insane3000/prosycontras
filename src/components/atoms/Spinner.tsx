import styled from "styled-components";

const SpinnerSt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  /* background: #141723; */
  .html-spinner {
    width: 2.5rem;
    height: 2.5rem;
    border: 0.2rem solid #2e3448;
    border-top: 0.2rem solid white;
    border-radius: 50%;
  }

  .html-spinner {
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 0.5;
    transition-duration: 0.5;
    -webkit-animation-name: rotate;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;

    -moz-transition-property: -moz-transform;
    -moz-animation-name: rotate;
    -moz-animation-duration: 0.5s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;

    transition-property: transform;
    animation-name: rotate;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @-moz-keyframes rotate {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <SpinnerSt className="spinner">
      <div className="html-spinner"></div>
    </SpinnerSt>
  );
};

export default Spinner;
