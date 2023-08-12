import { classNames } from 'shared/lib/classNames/classNames';
import i18n from 'shared/config/i18n/i18n';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t } = useTranslation();

  const handleChangeLang = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={classNames(cls.LangSwitcher, {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={handleChangeLang}>
        {t('Язык')}
      </Button>
    </div>
  );
};
