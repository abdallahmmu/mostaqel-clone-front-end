import React from "react";
import { useTranslation } from "react-i18next";


const ProjectInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="project-desc bg-white p-4">
        <div
          class="msg pdn--am brd--t"
          data-reply="6664899"
          id="message6664899"
        >
          <div class="msg__meta media mrg--bs">
            <a href="https://mostaql.com/u/Hemdan213" class="pull-right"></a>

            <div class="media-body">
              <h5 class="from mrg--an">
                <bdi>{t("Hemdan Khalifa")}</bdi>
              </h5>
              <div class="text-zeta text-muted">
                <i class="fa fa-clock-o"></i>
                <time
                  class="timeago"
                  datetime="2023-05-16 19:23:34"
                  title="2023-05-16 19:23:34"
                >
                  منذ 28 يوما و 21 ساعة
                </time>
              </div>
            </div>
          </div>

          <div class="text-wrapper-div msg__body copy wb ">
            <p>السلام عليكم</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
