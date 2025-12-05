import React from "react";
import './Activities.css';
import pasfoto from "../../../assets/pasfoto1.png";
import badmin from "../../../assets/badmin.png";
import ootataishi from "../../../assets/ootataishi.png";
import deaflympic from "../../../assets/deaflympic.png";
import modeling from "../../../assets/modeling.png";

const Activities = () => {
    return (
        <div className="activities-area">
            <div className="activities-wrapper">
                    <div role="list" className="act-list">

                      <div role="listitem" className="act-item">
                        <div className="act-item_content">
                          <h2>東京の専門学校生バドミントン大会 優勝</h2>
                          <p className="act-item_p">
                            
                          </p>
                        </div>
                        <img src={badmin} alt="" className="act-item_media" />
                      </div>
                      <div role="listitem" className="act-item">
                        <div className="act-item_content">
                          <h2>おおた大使国際所属 </h2>
                          <p className="act-item_p">
                            
                          </p>
                        </div>
                        <img src={ootataishi} alt="" className="act-item_media" />
                      </div>
                      <div role="listitem" className="act-item">
                        <div className="act-item_content">
                          <h2>体育祭、学校行事やボランティア参加 </h2>
                          <p className="act-item_p">
                          </p>
                        </div>
                        <img src={deaflympic} alt="" className="act-item_media" />
                      </div>
                      <div role="listitem" className="act-item">
                        <div className="act-item_content">
                          <h2>ファッションショーや服のモデルとしての撮影協力</h2>
                          <p className="act-item_p">
                            
                          </p>
                        </div>
                        <img src={modeling} alt="" className="act-item_media" />
                      </div>
                    </div>
                  </div>
        </div>
    );
}
export default Activities;