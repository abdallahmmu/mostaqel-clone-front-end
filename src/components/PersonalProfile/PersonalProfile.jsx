import { useTranslation } from "react-i18next";

function PersonalProfile(props) {
  const { t } = useTranslation();

  return (
    <div className="container-fluid col-md-12">
      <div className="row">
        <div className="col-md-12 text-end">
          <h5 className="m-3 pt-2 fw-bold">{t("Description")}</h5>
          <p className="mt-1 p-3">
            {!props.data.description
              ? "no discription available"
              : props.data?.description}
          </p>
        </div>
        <div className="col-md-12 text-end">
          {props.data.skill && (
            <p className="mt-1 p-3">
              <h5 className="m-3 pt-2">{t("Skills")}</h5>

              {props.data?.skill.map((skill) => {
                return <li className="mx-1 btn btn-primary">{skill}</li>;
              })}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonalProfile;
