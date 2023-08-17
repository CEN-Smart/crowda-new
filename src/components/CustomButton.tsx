'use client'
import { Button } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset',
  title: string,
  bgColor?: string,
  border?: boolean,
  textColor?: string,
  big?: boolean,
  icon?: IconType,
  onClick?: () => void
  className?: string
  shadow?: boolean
  colorScheme?: string
}

export default function CustomButton({ type, title, bgColor, border, textColor, big, icon: Icon, onClick, shadow, className, colorScheme }: ButtonProps) {
  return (
    <>
      <Button type={type} onClick={onClick} fontWeight='normal'
        border={border ? `1px solid ${textColor}` : 'none'}
        color={textColor}
        colorScheme={colorScheme ? colorScheme : ''}
        bg={bgColor}
        size={big ? 'lg' : 'md'}
        px={{
          base: big ? '8' : '4',
          lg: big ? '14' : '6'
        }}
        py={{
          base: big ? '8' : '4',
          lg: big ? '12' : '6'
        }}
        borderRadius={big ? 'full' : 'md'}
        className={`${className} ${shadow && 'drop-shadow-2xl'} transition duration-200 active:transform active:scale-95 active:shadow-none`}
        leftIcon={Icon && (<Icon size={20} />)}
      >
        {title}
      </Button>
    </>
  );
}
