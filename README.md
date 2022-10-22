# 번외-myNotion

☑️ 목표 : 노션 페이지 React로 웹에 올리기 

- react-notion 라이브러리(?) 사용해서 Local에 띄우기
    1. [https://github.com/splitbee/react-notion](https://github.com/splitbee/react-notion) 사용
    2. 간단한 리액트 프로젝트 생성
        
        ```bash
        npx create-react-app mynotion
        npm add react-notion
        
        Done
        ```bash
        
    3. 노션 페이지 정보 얻기
        1. 공개 할 노션의 페이지 ID
            
            share to web → [www.notion.so/id/](http://www.notion.so/id/~~~~)<NOTION_PAGE_ID>
            
        2. https://notion-api.splitbee.io/v1/page/
        3. 크롬으로 저 주소 열어서 json 정보 가져오기
        4. mynotion/data/<NOTION_PAGE_ID>.json 파일에 아까 받아온 정보 저장
        
    4. react 프로젝트에 코드 작성
        
        App.js
        
        ```jsx
        import "react-notion/src/styles.css";
        import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
        import { NotionRenderer } from "react-notion";
        
        // 첫번째 방법 JSON을 직접 import
        import staticResponse from './data/<NOTION_PAGE_ID>.json';
        
        function App() {
          return (
            <div className="App">
                <NotionRenderer // 웹페이지에 노션을 렌더링
                  blockMap={staticResponse} // 페이지정보 넣기
                  fullPage={true}
                />
            </div>
          );
        }
        
        export default App;
        ```
        
    5. 프로젝트 파일 내에서 react 실행
        
        ```bash
        cd mynotion
        npm start
        ```
        
    6. 노션의 하이퍼링크들 하나도 적용 안됨 ..
