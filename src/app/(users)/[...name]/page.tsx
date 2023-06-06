import { Header } from "@/components/Header"
import { TwettesMenu } from "@/components/TwettesMenu"

interface Props {
    params: {
        name: string
    }
}

export default function Bookmarks({params}: Props) {
    return (
        <main>
        <Header />
        <TwettesMenu />
      </main>
    )
}