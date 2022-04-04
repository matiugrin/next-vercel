// desde React 17 ya no es necesario importar React.
// import React from 'react'

import { useRouter } from "next/router";

import Link from "next/link"
import { CSSProperties, FC } from "react";

// export const ActiveLink = (params) => {
//   return (
//     <a href={params.href}>{params.texto}</a>
//   )
// }

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface Props {
    //obligatorias porque no tienen signo de ?
    text: string,
    href: string
}

export const ActiveLink: FC<Props> = ({ text, href }) => {

    //si coloco el style aqui, se va a generar cada vez que el componente sea renderizado. Por eso lo colocamos fuera del export.

    const { asPath } = useRouter();

    return (
      <Link href={ href }>
        
        <a style={ asPath === href ? style : undefined }>{ text }</a>
      
      </Link>
    )
  }