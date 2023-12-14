import "./App.css";
import { Route, Routes } from "react-router";
import styled from "@emotion/styled";

function App() {
  const Wrap = styled.div`
    position: relative;
    max-width: ${props => props.maxw + "px"};
  `;
  return (
    <Wrap maxw={960}>
      <Routes>
        <Route element={<h1>클코</h1>}></Route>

        <div className="menu">Nav 이동</div>
        <div className="nav">
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s,
          </p>

          <p>
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic
          </p>

          <p>
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages,
          </p>

          <p>
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </Routes>
    </Wrap>
  );
}

export default App;
