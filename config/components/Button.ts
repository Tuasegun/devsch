import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
    baseStyle: {
      bg: '#2E6B26',
      fontWeight: '600',
      fontSize: ['0.853rem', '0.853rem', '20.36px'],
      borderRadius: '7.12638px',
      color: 'brand.white',
      px: ['1.5rem', '1.5rem', '2.25rem'],
      py: '1.125rem',
      _hover: {
        bg: '#2E6B26',
        color: 'brand.white',
        borderRadius: '7.12638px',
      },
    },
    sizes: {
      sm: {
        fontSize: 'md',
        height: '34px',
      },
      lg: {
        fontSize: '2xl',
        height: '73px',
      },
    },
    variants: {
      link: {
        padding: 0,
        color: 'brand.purple.500',
        fontWeight: '600',
        fontSize: '20.36px',
        backgroundColor: 'transparent',
        _hover: {
          textDecoration: 'none',
          border: 'none',
          backgroundColor: 'transparent',
          color: 'brand.yellow.700',
        },
      },
      solid: {
        bg: 'brand.green.400',
        fontWeight: '600',
        fontSize: ['0.853rem', '0.853rem', '20.36px'],
        borderRadius: '7.12638px',
        color: 'brand.white',
        px: '2.174375rem',
        py: '1.25rem',
        transition: 'all 0.35s ease-in-out',
        _hover: {
          bg: 'brand.green.400',
          color: 'brand.white',
          borderRadius: '7.12638px',
        },
      },
      'solid-white': {
        bg: 'brand.white',
        color: 'brand.purple.500',
        fontWeight: '600',
        transition: 'all 0.35s ease-in-out',
        _hover: {
          bg: 'brand.yellow.700',
          color: 'brand.purple.500',
          borderTopRightRadius: '10px',
          borderBottomLeftRadius: '10px',
          borderTopLeftRadius: '0',
          borderBottomRightRadius: '0',
        },
      },
      'rounded-solid': {
        bg: 'brand.white',
        fontWeight: '600',
        fontSize: ['0.853rem', '0.853rem', '1.2725rem'],
        borderRadius: '30px',
        color: 'brand.purple.500',
        px: '2.25rem',
        py: '1.125rem',
        transition: 'all 0.35s ease-in-out',
        _hover: {
          borderRadius: '30px',
          bg: 'brand.yellow.700',
        },
      },
      outline: {
        bg: 'transparent',
        color: 'brand.purple.500',
        borderColor: 'brand.purple.500',
  
        _hover: {
          bg: 'brand.purple.500',
          color: 'brand.white',
        },
      },
      'rounded-solid-yellow-with-outline': {
        bg: 'brand.yellow.700',
        fontWeight: '600',
        fontSize: ['0.853rem', '0.853rem', '20.36px'],
        borderRadius: '30px',
        color: 'brand.purple.500',
        px: '6.875rem',
        py: '1.75rem',
        transition: 'all 0.35s ease-in-out',
        position: 'relative',
        _hover: {
          borderRadius: '30px',
        },
        _before: {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'calc(100% + 10px)',
          height: 'calc(100% + 10px)',
          borderRadius: '30px',
          borderWidth: '1px',
          borderColor: '#F3F3F3',
        },
      },
      subtle: (props) => {
        return {
          backgroundColor: `${props.colorScheme}.50`,
          color: `${props.colorScheme}.700`,
        }
      },
    },
  }
  