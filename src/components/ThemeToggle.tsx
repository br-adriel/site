import { getThemePreference } from '@/contexts/ThemeContext';
import * as RadixSwitch from '@radix-ui/react-switch';
import { Moon, Sun } from 'react-bootstrap-icons';

export default function ThemeToggle() {
  const { toggleTheme, usingDarkTheme } = getThemePreference();

  return (
    <div className='absolute top-1 right-2'>
      <RadixSwitch.Root
        checked={usingDarkTheme}
        onCheckedChange={toggleTheme}
        className='bg-alt_bg h-7 w-10 rounded relative bg-blue-600 focus-visible:outline focus:outline-blue-600 focus:outline-2 focus:outline-offset-2 shadow-inner hover:bg-violet-700 transition-colors'
      >
        <RadixSwitch.Thumb className='bg-siteBg-light dark:bg-siteBg-dark w-6 h-6 rounded absolute top-0.5 left-0.5 data-[state=checked]:left-auto data-[state=checked]:translate-x-3.5 transition-transform flex items-center justify-center shadow-sm' title='Alterar tema'>
          {usingDarkTheme ? <Moon /> : <Sun />}
        </RadixSwitch.Thumb>
      </RadixSwitch.Root>
    </div>
  );
}
