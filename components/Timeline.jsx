import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = (props) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">
          {props.title}
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{props.children}</p>
    </li>
  );
};

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);
  const { t } = useTranslation('about');

  const FullTimeline = () => (
    <>
      <Divider />
      <Year>2016</Year>
      <ul>
        <Step title={t('universityTitle')}>{t('universityText')}</Step>
        <Step title={t('capgeminiTitle')}>{t('capgeminiText')}</Step>
        <Step title={t('milanoTitle')}>{t('milanoText')}</Step>
      </ul>
      <Divider />
      <Year>2015</Year>
      <ul>
        <Step title={t('erasmusTitle')}>{t('erasmusText')}</Step>
      </ul>
      <Divider />
      <Year>2014</Year>
      <ul>
        <Step title={t('intershipTitle')}>{t('intershipText')}</Step>
      </ul>
      <Divider />
      <Year>2011</Year>
      <ul>
        <Step title={t('schoolTitle')}>{t('schoolText')}</Step>
        <Step title={t('universityStartTitle')}>
          {t('universityStartText')}
        </Step>
        <Step title={t('developTitle')}>{t('developText')}</Step>
      </ul>
      <Divider />
      <Year>1998</Year>
      <ul>
        <Step title={t('firstPcTitle')}>{t('firstPcText')}</Step>
      </ul>
      <Divider />
      <Year>1993</Year>
      <ul>
        <Step title={t('bornTitle')}>{t('bornText')}</Step>
      </ul>
    </>
  );

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2022</Year>
      <ul>
        <Step title={t('playtomicTitle')}>{t('playtomicText')}</Step>
      </ul>
      <ul>
        <Step title={t('beconceptTitle')}>{t('beconceptText')}</Step>
      </ul>
      <ul>
        <Step title={t('faceitTitle')}>{t('faceitText')}</Step>
      </ul>
      <Divider />
      <Year>2021</Year>
      <ul>
        <Step title={t('blueTitle')}>{t('blueText')}</Step>
        <Step title={t('twinYieldTitle')}>{t('twinYieldText')}</Step>
        <Step title={t('carTitle')}>{t('carText')}</Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title={t('gymlessTitle')}>{t('gymlessText')}</Step>
        <Step title={t('sanBenedettoTitle')}>{t('sanBenedettoText')}</Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title={t('amarisTitle')}>{t('amarisText')}</Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          {t('showMore')}
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
