import React from "react";
import { useTranslation } from "react-i18next";

function JobExperience() {

  const {t: t2} = useTranslation("global")

  return (
    <div>
      <h2
        className="secondary-title h-28 flex text-7xl text-center font-medium mt-20 justify-center">
        {t2("jobExperience.main")}
      </h2>

      <div className="square-show">
        <div className="info-show">
          <h2 className="title-show -ml-5">{t2("jobExperience.title")}</h2>
          <h2 className="text3 -ml-5">{t2("jobExperience.date")}</h2>
          <p className="description-show -ml-5 ">
           {t2("jobExperience.description")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobExperience;
