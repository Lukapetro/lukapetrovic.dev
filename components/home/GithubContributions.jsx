import { useTheme } from 'next-themes';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

export default function GithubContributions() {
  const { theme } = useTheme();

  const lightThemeContributions = {
    level0: '#ebedf0',
    level1: '#9be9a8',
    level2: '#40c463',
    level3: '#30a14e',
    level4: '#216e39'
  };

  const darkThemeContributions = {
    level0: '#545d68',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353'
  };

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
      theme={
        theme === 'dark' ? darkThemeContributions : lightThemeContributions
      }
      blockMargin={5}
      blockRadius={5}
      blockSize={14}
    >
      <ReactTooltip html />
    </GitHubCalendar>
  );
}
