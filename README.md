#블로그 서비스

<h2 style="font-weight:bold;">1. 프로젝트 개요</h2>
블로그에서 대표적으로 4개 페이지를 만들어 기본적인 글쓰기, 보기, 수정, 삭제 기능을 넣음<br>
<views 파일아래 ejs파일의 설명>
<ul>
  <li>home.ejs : 블로그의 메인화면</li>
  <ul>
    <li>게시물 수는 DB에서 가져와서 보여주나, 좋아요 방문자 수는 구현하지 못해 디자인만 해둔 상태</li>
    <li>게시물의 제목을 LIST형태로 보여주고 각 게시물 상세페이지로 들어가는 앵커 만듬</li>
  </ul>
  <li>post.ejs : 글 작성 페이지</li>
  <ul>
    <li>제목과 내용을 작성하여 DB로 넘겨주는 페이지</li>
    <li>이미지 첨부 구현하지 못함</li>
  </ul>
  <li>list.ejs : 글 목록 및 수정, 삭제 버튼 구현</li>
  <ul>
    <li>글의 수가 표시 되고 제목 클릭시 해당 상세페이지로 들어감</li>
    <li>수정 버튼 눌러 edit.ejs와 연결</li>
    <li>삭제 버튼 누를 시 DB에서 데이터 삭제, list에서 fadeout되게 설정</li>
  </ul>
  <li>about.ejs : 자기소개 페이지</li>
  <ul><li>html로 꾸민 페이지</li></ul>
  <li>detail.ejs : 상세페이지</li>
  <ul>
    <li>제목, 글 내용을 볼 수 있음</li>
    <li>댓글도 볼 수 있음(각 상세페이지 id와 댓글의 number가 같은 댓글만 보여주게 하여 상세페이지마다 댓글이 다르게 나옴)</li>
  </ul>
  <li>edit.ejs : 수정페이지</li>
  <ul><li>수정 버튼을 누른 게시물의 제목, 내용을 그대로 불러와 수정하여 DB에 업데이트 되게 설정</li></ul>
  <li>head.ejs : 블로그 navigation과 intro배경 사진등 각 페이지에 똑같이 들어가는 부분</li>
</ul>
<h2 style="font-weight:bold;">2.기술스택</h2>
<ul>
  <li>서버 : node.js</li>
  <li>DB : mongoDB</li>
  <li>클라이언트 : html, css</li>
</ul>

<h2 style="font-weight:bold;">3.확인 받고 싶은 부분</h2>
확인 받고 싶었던 내용이 궁금했던 내용과 겹치는거 같습니다
추가로 효율적으로 코드가 작성됐는지 확인 받고 


<h2 style="font-weight:bold;">4.궁금했던 부분</h2>
<img width="916" alt="image" src="https://user-images.githubusercontent.com/119796600/209284140-b71003df-3fe5-4931-8d2a-0f46f6bc1882.png">
댓글 입력시 댓글이 추가된 상태의 상세페이지로 새로고침(?)이 되고 싶은데 
res.redirect('/detail/:id')를 하게 되면 detail.ejs에 제목, 내용등이 같이 전달되지 않아 오류가 떠 어쩔수 없이 list로 redirect했습니다... 해결하고 싶어요 !

<img width="631" alt="image" src="https://user-images.githubusercontent.com/119796600/209285771-e0d5331a-1c43-406e-88a5-f29e8ec919bd.png">
게시물 등록시 counter라는 컬렉션의 게시물갯수가 1씩 증가하게 구현해둬서 게시물의 id를 그거랑 연동을 시켰는데
게시물을 중간에 삭제하게 해도 counter의 게시물갯수 수는 변함이 없으니 총 게시물 수 같은 것을 나타낼때 중간 게시물 삭제가 반영되지 않습니다.
삭제시 counter의 게시물갯수도 변경하고 싶습니다
