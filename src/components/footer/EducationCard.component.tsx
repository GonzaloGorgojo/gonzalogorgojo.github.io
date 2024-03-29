import { BiLinkExternal } from 'react-icons/bi';
import COLORS from 'src/common/colors';

type Props = {
  institution: string;
  certificationLink: string;
  date: string;
  description: string;
};

function EducationCard(props: Props) {
  const { institution, certificationLink, date, description } = props;
  return (
    <div className="education-card flex flex-col items-center p-1 col-span-2 justify-center ">
      <p style={{ color: COLORS.mainTextColor }} className=" text-center">
        {description}
      </p>
      <div style={{ color: COLORS.alternativeTextColor }}>
        <a
          href={certificationLink}
          target="_blank"
          rel="noreferrer"
          className="w-full flex flex-row justify-center items-center hover:text-indigo-300"
        >
          <p className="my-1 mr-1 text-xs sm:text-base text-center">
            {institution}
          </p>

          <BiLinkExternal />
        </a>
      </div>

      <p
        className="my-1 text-center"
        style={{ color: COLORS.alternativeTextColor }}
      >
        {date}
      </p>
    </div>
  );
}

export default EducationCard;
