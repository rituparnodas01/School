"use client"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../BootstrapClient";
import "./Marks.css"

const Marks = () => {
    return (
          <div className="container">
            <h2>Subject Marks</h2>
            <hr />
            <div className="accordion" id="accordionFirstLanguage">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button custom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Subject : English Language
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionFirstLanguage">
                  <div className="accordion-body">
                    <table className="table">
                      <thead className="header">
                        <tr className="tr">
                          <th className="th">Category-1</th>
                          <th className="th">Category-2</th>
                          <th className="th">Full Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(10)].map((_, index) => (
                          <tr className="tr" key={index}>
                            <td className="td">
                              <select className="select"></select>
                            </td>
                            <td className="td">
                              <select className="select"></select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="accordion" id="accordionSecondLanguage">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button custom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    Subject : SL Bengali Language
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionSecondLanguage">
                  <div className="accordion-body">
                    <table className="table">
                      <thead className="header">
                        <tr className="tr">
                          <th className="th">Category-1</th>
                          <th className="th">Category-2</th>
                          <th className="th">Full Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(10)].map((_, index) => (
                          <tr className="tr" key={index}>
                            <td className="td">
                              <select className="select"></select>
                            </td>
                            <td className="td"></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="accordion" id="accordionthirdLanguage">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThird">
                  <button className="accordion-button custom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThird" aria-expanded="true" aria-controls="collapseThird">
                    Subject : SL Hindi Language
                  </button>
                </h2>
                <div id="collapseThird" className="accordion-collapse collapse show" aria-labelledby="headingThird" data-bs-parent="#accordionthirdLanguage">
                  <div className="accordion-body">
                    <table className="table">
                      <thead className="header">
                        <tr className="tr">
                          <th className="th">Category-1</th>
                          <th className="th">Category-2</th>
                          <th className="th">Full Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(10)].map((_, index) => (
                          <tr className="tr" key={index}>
                            <td className="td">
                              <select className="select"></select>
                            </td>
                            <td className="td"></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      
      export default Marks;
      