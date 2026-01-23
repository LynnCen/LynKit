import React from 'react'

export interface IconaicharactersProps extends React.SVGProps<SVGSVGElement> {}

/**
 * ai_characters
 * @source figma
 */
export const Iconaicharacters = React.memo((props: IconaicharactersProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M23.5 21.0527H22V14.5557H23.5V21.0527ZM21.6562 21.0518H20.1504L19.252 19.5127H16.2998L17.1309 18.0127H18.376L17.292 16.1553L14.5 21.0518H13L17.292 13.6006L21.6562 21.0518ZM18.9502 3C20.0822 3.00011 20.9999 3.91778 21 5.0498V13H19.5V5.0498C19.4999 4.7462 19.2538 4.50011 18.9502 4.5H5.0498C4.7462 4.50011 4.50011 4.7462 4.5 5.0498V18.9502C4.50011 19.2538 4.7462 19.4999 5.0498 19.5H11.5V21H5.0498C3.91778 20.9999 3.00011 20.0822 3 18.9502V5.0498C3.00011 3.91778 3.91778 3.00011 5.0498 3H18.9502ZM13.917 7.91797C14.8834 7.91809 15.667 8.70154 15.667 9.66797V10.335H14.167V9.66797C14.167 9.52997 14.055 9.41809 13.917 9.41797H12.751V14.584H13.667V16.084H10.334V14.584H11.251V9.41797H10.084C9.94591 9.41797 9.83398 9.5299 9.83398 9.66797V10.335H8.33398V9.66797C8.33398 8.70147 9.11749 7.91797 10.084 7.91797H13.917Z"
        fill="black"
        fillOpacity={0.1}
      />
    </svg>
  )
})

Iconaicharacters.displayName = 'Iconaicharacters'

export default Iconaicharacters
