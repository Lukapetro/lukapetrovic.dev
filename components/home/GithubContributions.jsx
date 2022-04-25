import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

export default function GithubContributions() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <GitHubCalendar
      username="lukapetro"
      transformData={selectLastHalfYear}
      hideTotalCount
      hideColorLegend
      theme={{
        level0: '#545d68',
        level1: '#0e4429',
        level2: '#006d32',
        level3: '#26a641',
        level4: '#39d353'
      }}
      blockMargin={5}
      blockRadius={5}
      blockSize={14}
    >
      <ReactTooltip html />
    </GitHubCalendar>
  );
}
