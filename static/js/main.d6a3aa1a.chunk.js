(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(t,e,n){t.exports={modal:"TaskModal_modal__Vs10a",overlay:"TaskModal_overlay__1iMdN",descriptionInput:"TaskModal_descriptionInput__1qkp4",titleInput:"TaskModal_titleInput__3li-g",modalTaskBtnsContainer:"TaskModal_modalTaskBtnsContainer__1yjJm",label:"TaskModal_label__BJNqV",dropdown:"TaskModal_dropdown__1oetS",dropdownContent:"TaskModal_dropdownContent__2wj6x"}},22:function(t,e,n){t.exports={board:"Board_board__8npNI",boardHeader:"Board_boardHeader__OjfMz",addBtn:"Board_addBtn__XKKvj",addColumnForm:"Board_addColumnForm__rnzu6"}},27:function(t,e,n){t.exports={column:"Column_column__5bjLn",title:"Column_title__2XnMF",addTaskBtn:"Column_addTaskBtn__1w9hF",header:"Column_header__2JfKT"}},28:function(t,e,n){t.exports={taskList:"Task_taskList__3xjK3",task:"Task_task__2ZL6s",editBtn:"Task_editBtn__2OpVa"}},29:function(t,e,n){t.exports={boardTitleContainer:"BoardTitle_boardTitleContainer__3jq4u",boardTitle:"BoardTitle_boardTitle__2t--w",input:"BoardTitle_input__Tz0D9"}},37:function(t,e,n){t.exports={buttonConteiner:"App_buttonConteiner__dkKTW",header:"App_header__1cavb"}},39:function(t,e,n){t.exports={dropdown:"SwitchBoard_dropdown__2e9cN",dropdownContent:"SwitchBoard_dropdownContent__2MgK9"}},43:function(t,e,n){t.exports={button:"GreenButton_button__qYWqD"}},44:function(t,e,n){t.exports={button:"BlueButton_button__3sy6M"}},45:function(t,e,n){t.exports={button:"EditButton_button__3tJJe"}},46:function(t,e,n){t.exports={loader:"Kanban_loader__3Ob1l",spin:"Kanban_spin__2c6gX"}},54:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var a=n(8),c=n(30),o=n.n(c),s=(n(54),n(11)),i=n(37),r=n.n(i),d=n(0),l=n.n(d),u=n(2),b=n(1),j=n(3),x=n(34),p=n(42),O=n(25),m=function(){function t(e){var n=this;Object(b.a)(this,t),this.signInWithGoogle=function(){var t=new x.a;Object(x.c)(n.auth,t)},this.signOut=function(){n.auth.signOut()},this.getMyBoards=Object(u.a)(l.a.mark((function t(){var e,a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(O.a)(n.db,"boards",n.getCurrentUser().uid),t.next=3,Object(O.b)(e);case 3:return a=t.sent,c=a.exists()?a.data():null,t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)}))),this.setMyBoards=function(){var t=Object(u.a)(l.a.mark((function t(e){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(O.a)(n.db,"boards",n.getCurrentUser().uid),t.next=3,Object(O.d)(a,e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.app=Object(p.a)(e),this.db=Object(O.c)(this.app),this.auth=Object(x.b)()}return Object(j.a)(t,[{key:"getCurrentUser",value:function(){return this.currentUser||(this.currentUser=this.auth.currentUser),this.currentUser}}]),t}(),_=n(43),k=n.n(_),h=n(6),f=function(t){return Object(h.jsx)("button",{className:k.a.button,onClick:t.onClick,children:t.children})},I=n(14),v=n(27),C=n.n(v),T=n(28),N=n.n(T),B=n(20),y=n.n(B),S=n(44),E=n.n(S),g=function(t){return Object(h.jsx)("button",{className:E.a.button,onClick:t.onClick,children:t.children})},w=function(t){var e=Object(a.useState)(t.taskCtn.title),n=Object(s.a)(e,2),c=n[0],o=n[1],i=Object(a.useState)(t.taskCtn.description),r=Object(s.a)(i,2),d=r[0],l=r[1],u=Object(I.c)((function(e){var n=e.boards[e.currentBoardIndex].columns.map((function(t,e){return{title:t.title,index:e}}));return n.splice(t.columnIndex,1),n}));return Object(h.jsxs)("from",{children:[Object(h.jsx)("div",{className:y.a.overlay}),Object(h.jsxs)("div",{className:y.a.modal,children:[Object(h.jsx)("label",{className:y.a.label,children:"Task title"}),Object(h.jsx)("input",{type:"text",className:y.a.titleInput,value:c,onChange:function(t){o(t.target.value)},ref:t.taskNameRef}),Object(h.jsx)("label",{className:y.a.label,children:"Task description"}),Object(h.jsx)("textarea",{type:"text",className:y.a.descriptionInput,value:d,onChange:function(t){l(t.target.value)},ref:t.taskDescriptionRef}),Object(h.jsxs)("div",{className:y.a.modalTaskBtnsContainer,children:[Object(h.jsx)(g,{onClick:function(){t.onSaveTask(c,d)},children:"\u2714"}),Object(h.jsx)(g,{onClick:function(){t.onClose()},children:"\u2716"}),Object(h.jsx)(g,{onClick:function(){t.onDeleteTask()},children:"Delete"}),Object(h.jsxs)("div",{className:y.a.dropdown,children:[Object(h.jsx)(g,{children:"Move to"}),Object(h.jsx)("div",{className:y.a.dropdownContent,children:u.map((function(e){return Object(h.jsx)("a",{onClick:function(){return n=e.index,void t.onMoveTask(c,d,n);var n},children:e.title})}))})]})]})]})]})},A=(n(62),n(45)),D=n.n(A),M=function(t){return Object(h.jsx)("button",{className:D.a.button,onClick:t.onClick,children:t.children})},L=function(t){var e=Object(a.useState)(!1),n=Object(s.a)(e,2),c=n[0],o=n[1],i=Object(a.useRef)(),r=Object(a.useRef)(),d=Object(I.b)();return Object(h.jsxs)("div",{className:N.a.taskList,children:[Object(h.jsx)("h4",{className:N.a.task,children:t.task.title}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:N.a.editBtn,onClick:function(){d({type:"MOVE_TASK_UP",columnIndex:t.columnIndex,taskIndex:t.taskIndex}),t.onSaveBoard()},children:"\ud83e\udc45"}),Object(h.jsx)("button",{className:N.a.editBtn,onClick:function(){d({type:"MOVE_TASK_DOWN",columnIndex:t.columnIndex,taskIndex:t.taskIndex}),t.onSaveBoard()},children:"\ud83e\udc47"}),Object(h.jsx)(M,{onClick:function(){o(!0)},children:"\ud83d\udd8a"})]}),c&&Object(h.jsx)(w,{taskCtn:t.task,onClose:function(){o(!1)},columnIndex:t.columnIndex,onSaveTask:function(e,n){d({type:"UPDATE_TASK",columnIndex:t.columnIndex,taskIndex:t.taskIndex,task:{title:e,position:t.task.position,description:n}}),o(!1)},onDeleteTask:function(){d({type:"DELETE_TASK",columnIndex:t.columnIndex,taskIndex:t.taskIndex}),t.onSaveBoard()},onMoveTask:function(e,n,a){d({type:"MOVE_TASK",columnIndex:t.columnIndex,taskIndex:t.taskIndex,targetColumnIndex:a,task:{title:e,position:t.task.position,description:n}}),t.onSaveBoard()},taskNameRef:i,taskDescriptionRef:r})]})},K=function(t){var e=Object(a.useState)(!1),n=Object(s.a)(e,2),c=n[0],o=n[1],i=Object(a.useState)(!1),r=Object(s.a)(i,2),d=r[0],l=r[1],u=Object(a.useState)(t.column.title),b=Object(s.a)(u,2),j=b[0],x=b[1],p=Object(I.b)();return Object(h.jsxs)("div",{className:C.a.column,children:[Object(h.jsxs)("div",{children:[!d&&Object(h.jsxs)("div",{className:C.a.header,children:[Object(h.jsx)("h3",{className:C.a.title,children:t.column.title}),Object(h.jsx)(M,{onClick:function(t){t.preventDefault(),l(!0)},children:"\ud83d\udd8a"})]}),d&&Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"text",value:j,onChange:function(t){x(t.target.value)}}),Object(h.jsx)(f,{onClick:function(){p({type:"UPDATE_COLUMN",columnIndex:t.columnIndex,column:{title:j,position:t.column.length,taskList:t.column.taskList}}),l(!1)},children:"\u2714"}),Object(h.jsx)(f,{onClick:function(){l(!1)},children:"\u2716"}),Object(h.jsx)(f,{onClick:function(){p({type:"DELETE_COLUMN",columnIndex:t.columnIndex})},children:"Delete"})]})]}),t.column.taskList.map((function(e,n){return Object(h.jsx)(L,{columnIndex:t.columnIndex,taskIndex:n,task:e},e.title)})),Object(h.jsx)("button",{className:C.a.addTaskBtn,onClick:function(){o(!0)},children:"+ add new task"}),c&&Object(h.jsx)(w,{onClose:function(){o(!1)},taskCtn:{},onSaveTask:function(e,n){p({type:"SAVE_NEW_TASK",columnIndex:t.columnIndex,task:{title:e,position:t.column.taskList.length,description:n}}),o(!1)}})]})},U=n(22),V=n.n(U),R=n(29),W=n.n(R),P=function(t){var e=Object(a.useState)(!1),n=Object(s.a)(e,2),c=n[0],o=n[1],i=Object(a.useState)(t.title),r=Object(s.a)(i,2),d=r[0],l=r[1];Object(a.useEffect)((function(){l(t.title)}),[t.title]);return Object(h.jsx)(h.Fragment,{children:c?Object(h.jsxs)("div",{className:W.a.boardTitleContainer,children:[Object(h.jsx)("input",{className:W.a.input,type:"text",value:d,onChange:function(t){l(t.target.value)}}),Object(h.jsx)(f,{onClick:function(){t.onSaveNewBoardTitle(d),o(!1)},children:"\u2714"}),Object(h.jsx)(f,{onClick:function(){o(!1)},children:"\u2716"}),Object(h.jsx)(f,{children:"Delete"})]}):Object(h.jsxs)("div",{className:W.a.boardTitleContainer,children:[Object(h.jsx)("h2",{className:W.a.boardTitle,children:d}),Object(h.jsx)(M,{onClick:function(){o(!0)},children:"\ud83d\udd8a"})]})})},q=n(39),F=n.n(q),J=function(t){var e=Object(I.c)((function(t){return t.boards})),n=Object(I.b)();return Object(h.jsxs)("div",{className:F.a.dropdown,children:[Object(h.jsx)(f,{children:"Switch board"}),Object(h.jsxs)("div",{className:F.a.dropdownContent,children:[e.map((function(t,e){return Object(h.jsx)("a",{onClick:function(){return function(t){n({type:"SWITCH_BOARD",newIndex:t})}(e)},children:t&&t.title})})),Object(h.jsx)("button",{onClick:function(){n({type:"SAVE_NEW_BOARD",board:{title:"New board",columns:[]}})},children:"+ add new board"})]})]})},z=function(t){var e=Object(a.useState)(!1),n=Object(s.a)(e,2),c=n[0],o=n[1],i=Object(a.useRef)(),r=Object(I.b)(),d=Object(I.c)((function(e){return e.boards?e.boards[t.boardId]:null}));return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:V.a.boardHeader,children:[Object(h.jsx)(J,{}),Object(h.jsx)(P,{title:d.title,onSaveNewBoardTitle:function(t){r({type:"UPDATE_BOARD_TITLE",newTitle:t})}})]}),Object(h.jsxs)("div",{className:V.a.board,children:[d&&d.columns&&d.columns.map((function(t,e){return Object(h.jsx)(K,{column:t,columnIndex:e},t.position)})),!c&&Object(h.jsx)("button",{className:V.a.addBtn,onClick:function(){o(!0)},children:"+ add new column"}),c&&Object(h.jsxs)("form",{className:V.a.addColumnForm,children:[Object(h.jsx)("input",{type:"text",placeholder:"enter column name",ref:i}),Object(h.jsx)(f,{className:V.a.addColumnBtns,onClick:function(t){t.preventDefault();var e=i.current.value;r({type:"SAVE_COLUMN",column:{title:e,position:3,taskList:[]}}),o(!1)},children:"\u2714"}),Object(h.jsx)(f,{className:V.a.addColumnBtns,onClick:function(t){t.preventDefault(),o(!1)},children:"\u2716"})]})]})]})},H=n(46),G=n.n(H),X=function(t){var e=Object(I.b)(),n=Object(I.c)((function(t){return t}));return Object(a.useEffect)((function(){t.provider.getMyBoards().then((function(t){t||(t={currentBoardIndex:0,boards:[{title:"New board",columns:[]}]}),e({type:"INIT",boards:t})}))}),[]),Object(a.useEffect)((function(){n.boards&&t.provider.setMyBoards(n)}),[n]),Object(h.jsx)(h.Fragment,{children:n&&n.boards?Object(h.jsx)(z,{boardId:n.currentBoardIndex,provider:t.provider}):Object(h.jsx)("div",{className:G.a.loader})})},Y=n(47),Q=new m({apiKey:"AIzaSyDtq-wAg6dzBCQYVI4Wkt3-_5e7qcmvytg",authDomain:"kanban-f9914.firebaseapp.com",projectId:"kanban-f9914",storageBucket:"kanban-f9914.appspot.com",messagingSenderId:"273849008084",appId:"1:273849008084:web:bd4ccc18e119db93216041"});var Z=function(){var t=Object(Y.a)(Q.auth),e=Object(s.a)(t,1)[0];return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:r.a.header,children:"KANBAN"}),!e&&Object(h.jsx)("div",{className:r.a.buttonConteiner,children:Object(h.jsx)(f,{onClick:function(){Q.signInWithGoogle()},children:"Sign in with Google account"})}),e&&Object(h.jsx)(X,{provider:Q})]})},$=n(48),tt=n(49),et=Object(tt.a)((function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,a=Object($.a)({},e);return"INIT"===n.type?n.boards:(a.boards&&(t=a.boards[a.currentBoardIndex]),"SAVE_NEW_BOARD"===n.type&&(a.boards.push(n.board),a.currentBoardIndex=a.boards.length-1),"SWITCH_BOARD"===n.type&&(a.currentBoardIndex=n.newIndex),"UPDATE_BOARD_TITLE"===n.type&&(a.boards[a.currentBoardIndex].title=n.newTitle),"SAVE_NEW_TASK"===n.type&&t.columns[n.columnIndex].taskList.push(n.task),"UPDATE_TASK"===n.type&&t.columns[n.columnIndex].taskList.splice(n.taskIndex,1,n.task),"MOVE_TASK"===n.type&&(t.columns[n.columnIndex].taskList.splice(n.taskIndex,1),t.columns[n.targetColumnIndex].taskList.push(n.task)),"MOVE_TASK_UP"===n.type&&n.taskIndex>0&&t.columns[n.columnIndex].taskList.move(n.taskIndex,n.taskIndex-1),"MOVE_TASK_DOWN"===n.type&&n.taskIndex<t.columns[n.columnIndex].taskList.length-1&&t.columns[n.columnIndex].taskList.move(n.taskIndex,n.taskIndex+1),"DELETE_TASK"===n.type&&t.columns[n.columnIndex].taskList.splice(n.taskIndex,1),"SAVE_COLUMN"===n.type&&t.columns.push(n.column),"UPDATE_COLUMN"===n.type&&t.columns.splice(n.columnIndex,1,n.column),"DELETE_COLUMN"===n.type&&t.columns.splice(n.columnIndex,1),a)})),nt=et;o.a.render(Object(h.jsx)(I.a,{store:nt,children:Object(h.jsx)(Z,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.d6a3aa1a.chunk.js.map