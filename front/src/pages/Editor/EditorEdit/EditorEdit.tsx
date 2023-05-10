import { useNavigate } from "react-router-dom";
import tw, { styled } from "twin.macro";

const EditorEdit = () => {
  const dummyFunc = () => console.log("func call");

  return (
    <>
      <div className="viewer" tw="flex flex-col grow">
        <div className="viewerTop">
          <div
            className="ViewerToolbarWrap"
            tw="flex justify-center border-t-2 border-blue-700 py-1 bg-blue-800"
          >
            <div
              className="ViewerToolbar"
              tw="flex items-center text-sm text-lightgray-400 rounded-[2rem] bg-blue-600"
            >
              <div className="ZoomTool" tw="flex">
                <div
                  className="ZoomOut"
                  tw="pt-1 mx-2"
                  onClick={() => dummyFunc()}
                >
                  <i className="fi fi-bs-zoom-out"></i>
                </div>
                <input
                  type="text"
                  value={"100%"}
                  tw="min-w-[4rem] max-w-[4rem] text-center bg-inherit"
                  onClick={() => dummyFunc()}
                />
                <div
                  className="ZoomIn"
                  tw="pt-1 mx-2"
                  onClick={() => dummyFunc()}
                >
                  <i className="fi fi-bs-zoom-in"></i>
                </div>
              </div>
              <div className="HelpTool" tw="flex text-sm rounded-[2rem]">
                <div
                  className="ZoomIn"
                  tw="pt-1 mx-2 text-base"
                  onClick={() => dummyFunc()}
                >
                  <i className="fi fi-bs-info"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div tw="flex flex-row grow">
          <div
            className="LeftSidebar"
            tw="flex flex-col min-w-[15rem] max-w-[15rem]"
          >
            <div
              className="SelectSubjectForm"
              tw="w-full px-4 pt-2 pb-4 border-b-2 bg-white"
            >
              <div className="FormHeader" tw="mb-2 text-base font-bold">
                대상자
              </div>
              <div className="FormContent">
                <select
                  className="SelectSubject"
                  tw="w-full p-1 border rounded border-black"
                >
                  <option value="작성자">작성자</option>
                  <option value="User A">User A</option>
                  <option value="User B">User B</option>
                </select>
              </div>
            </div>
            <div
              className="SelectLabelForm"
              tw="grow w-full px-4 pt-2 pb-4 bg-white"
            >
              <div className="FormHeader" tw="mb-2 text-base font-bold">
                라벨 선택
              </div>
              <div className="FormContent">
                <div
                  className="SelectSubject"
                  tw="w-full p-1 border rounded border-black"
                >
                  <div className="LabelGroup">
                    <div className="GroupTitle" tw="flex items-center">
                      <label tw="cursor-pointer">서명 필드</label>
                      <i
                        className="fi fi-ss-angle-small-down"
                        tw="pl-1 cursor-pointer"
                      ></i>
                    </div>
                    <div className="GroupContent" tw="px-2 py-1">
                      <div className="LabelGroupItem" tw="mt-1 mb-2 text-sm">
                        <div
                          tw="w-full p-1 border-2 border-orange-600 bg-orange-200 rounded-lg cursor-pointer"
                          onClick={() => console.log("addLabelFunc call")}
                        >
                          <i
                            className="fi fi-sr-pencil"
                            tw="pr-1 cursor-pointer"
                          ></i>
                          <label tw="cursor-pointer">서명</label>
                        </div>
                      </div>
                      <div className="LabelGroupItem" tw="mt-1 mb-2 text-sm">
                        <div
                          tw="w-full p-1 border-2 border-orange-600 bg-orange-200 rounded-lg cursor-pointer"
                          onClick={() => console.log("addLabelFunc call")}
                        >
                          <i
                            className="fi fi-sr-fingerprint"
                            tw="pr-1 cursor-pointer"
                          ></i>
                          <label tw="cursor-pointer">도장/사인</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="LabelGroup">
                    <div className="GroupTitle" tw="flex items-center">
                      <label tw="cursor-pointer">표준 필드</label>
                      <i
                        className="fi fi-ss-angle-small-down"
                        tw="pl-1 cursor-pointer"
                      ></i>
                    </div>
                    <div className="GroupContent" tw="px-2 py-1">
                      <div className="LabelGroupItem" tw="mt-1 mb-2 text-sm">
                        <div
                          tw="w-full p-1 border-2 border-orange-600 bg-orange-200 rounded-lg cursor-pointer"
                          onClick={() => console.log("addLabelFunc call")}
                        >
                          <i
                            className="fi fi-rr-pencil"
                            tw="pr-1 cursor-pointer"
                          ></i>
                          <label tw="cursor-pointer">텍스트</label>
                        </div>
                      </div>
                      <div className="LabelGroupItem" tw="mt-1 mb-2 text-sm">
                        <div
                          tw="w-full p-1 border-2 border-orange-600 bg-orange-200 rounded-lg cursor-pointer"
                          onClick={() => console.log("addLabelFunc call")}
                        >
                          <i
                            className="fi fi-rr-checkbox"
                            tw="pr-1 cursor-pointer"
                          ></i>
                          <label tw="cursor-pointer">체크박스</label>
                        </div>
                      </div>
                      <div className="LabelGroupItem" tw="mt-1 mb-2 text-sm">
                        <div
                          tw="w-full p-1 border-2 border-orange-600 bg-orange-200 rounded-lg cursor-pointer"
                          onClick={() => console.log("addLabelFunc call")}
                        >
                          <i
                            className="fi fi-rr-circle"
                            tw="pr-1 cursor-pointer"
                          ></i>
                          <label tw="cursor-pointer">라디오 버튼</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Center" tw="w-full">
            center view
          </div>
          <div
            className="RightSidebar"
            tw="flex flex-col min-w-[15rem] max-w-[15rem] bg-orange-100"
          >
            right
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorEdit;
