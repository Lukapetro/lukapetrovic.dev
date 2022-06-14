import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiTypescript,
  SiJest,
  SiRedux,
  SiReact
} from 'react-icons/si';

import { GrReactjs } from 'react-icons/gr';
import cn from 'classnames';

const skills = [
  {
    name: 'JavaScript',
    icon: <SiJavascript className="h-5 w-5" />,
    color: 'text-yellow-400',
    href: 'https://www.javascript.com/'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="h-5 w-5" />,
    color: 'text-blue-400',
    href: 'https://www.typescriptlang.org/'
  },
  {
    name: 'React',
    icon: <GrReactjs className="h-5 w-5" />,
    color: 'text-sky-400',
    href: 'https://it.reactjs.org/'
  },
  {
    name: 'Node.JS',
    icon: <SiNodedotjs className="h-5 w-5" />,
    color: 'text-green-600',
    href: 'https://nodejs.org/it/'
  },
  {
    name: 'Express',
    icon: <SiExpress className="h-5 w-5" />,
    color: 'text-gray-400',
    href: 'https://expressjs.com/it/'
  },
  {
    name: 'GraphQL',
    icon: <SiGraphql className="h-5 w-5" />,
    color: 'text-pink-500',
    href: 'https://graphql.org/'
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="h-5 w-5" />,
    color: 'text-green-500',
    href: 'https://www.mongodb.com/'
  },
  {
    name: 'Git',
    icon: <SiGit className="h-5 w-5" />,
    color: 'text-amber-600',
    href: 'https://git-scm.com/'
  },
  {
    name: 'Docker',
    icon: <SiDocker className="h-5 w-5" />,
    color: 'text-blue-600',
    href: 'https://www.docker.com/'
  },
  {
    name: 'Redux',
    icon: <SiRedux className="h-5 w-5" />,
    color: 'text-purple-500',
    href: 'https://redux-toolkit.js.org/'
  },
  {
    name: 'React Native',
    icon: <SiReact className="h-5 w-5" />,
    color: 'text-sky-400',
    href: 'https://reactnative.dev/'
  },
  {
    name: 'Jest',
    icon: <SiJest className="h-5 w-5" />,
    color: 'text-orange-600',
    href: 'https://www.docker.com/'
  }
];

const SkillCard = ({ name, icon, color, href }) => (
  <a
    key={name}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    className={cn(
      'transform hover:scale-[1.05] transition-all',
      'rounded-xl p-1',
      color
    )}
  >
    <div className="flex justify-center items-center px-4 py-2 border-2 border-gray-300 bg-color dark:border-gray-600 rounded-md">
      {icon}
      <p className="ml-2">{name}</p>
    </div>
  </a>
);

export default function Skills() {
  return skills.map((skill) => SkillCard(skill));
}
