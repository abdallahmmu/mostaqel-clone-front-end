import React from "react";

const ProjectInfo = () => {
  return (
    <>
      <div className="project-desc bg-white p-4">
        <tr data-msg-item="6660105" data-msg-read="true" class="">
          <td class="info-td text-center">
            <a href="https://mostaql.com/u/baraa_samih">
              <img
                src="https://avatars.hsoubcdn.com/4ec3fb4b90837189828d77c07b50ec64?s=128"
                class="img-thumbnail media-object uavatar uavatar--medium img-circle"
                width="64"
                height="64"
                alt=""
              />
            </a>
          </td>

          <td class="msg__cell--subject details-td">
            <div class="card-title_wrapper">
              <div class="card--title">
                <h2 class="mrg--bt-reset">
                  <a href="https://mostaql.com/message/6660105">
                    استفسار حول استكمال برمجة موقع
                  </a>
                </h2>

                <ul class="message__meta list-meta-items">
                  <li>
                    <a
                      href="https://mostaql.com/u/baraa_samih"
                      class="text-muted"
                    >
                      <i class="fa fa-fw fa-user"></i> Baraa S.
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://mostaql.com/message/6660105"
                      class="text-muted"
                    >
                      <i class="fa fa-clock-o"></i>
                      <time datetime="" title="">
                        منذ 25 يوما و 18 ساعة
                      </time>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="card--actions hidden-xs"></div>
            </div>

            <div class="">
              <div class="mrg--tt">
                <p class="text-wrapper-div message__brief ">
                  <a
                    href="https://mostaql.com/message/6660105"
                    class="details-url"
                  >
                    بكل تأكيد، هل ممكن الترتيب للقاء نتحدث فيه عن التفاصيل ونرسل
                    لك الكود للاطلاع عليه، يرجى التواصل معنا عبر الايميل التالي:
                    b.sbeih@sensorial-life.com
                  </a>
                </p>
              </div>
            </div>
          </td>
        </tr>
      </div>
    </>
  );
};

export default ProjectInfo;
