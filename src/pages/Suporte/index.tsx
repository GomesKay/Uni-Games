import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Suporte() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="flex h-screen flex-col justify-center pt-24 text-white">
      <div className="flex justify-center gap-44 sm:flex-col sm:items-center sm:gap-20 md:flex-col md:items-center md:gap-20 lg:flex-col lg:items-center lg:gap-20 xl:flex-col xl:items-center xl:gap-20 xxl:flex-col xxl:items-center xxl:gap-20 exl:flex-col exl:items-center exl:gap-20">
        <h1 className="text-5xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl">
          Perguntas Frequentes | FAQ
        </h1>

        <div className="w-[700px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] exl:w-[600px]">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl sm:text-lg md:text-lg">
                É seguro comprar jogos na Uni Games?
              </AccordionTrigger>
              <AccordionContent className="text-base sm:text-sm md:text-sm">
                Sim, todas as transações são protegidas por criptografia, e
                temos políticas de segurança robustas para proteger seus dados e
                garantir uma compra segura.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl">
                Quais formas de pagamento são aceitas?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Aceitamos diversos métodos de pagamento, incluindo cartões de
                crédito, débito, Pix e boletos bancários. Verifique as opções
                disponíveis no momento da compra.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl">
                Posso pedir reembolso de um jogo comprado?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Sim, oferecemos reembolso para compras feitas nas últimas 48
                horas, desde que o jogo ainda não tenha sido baixado ou jogado
                por mais de duas horas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl">
                Como posso acessar e baixar o jogo após a compra?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Após a compra ser concluída, o jogo ficará disponível na sua
                biblioteca de downloads. Acesse sua conta, vá até a seção de
                "Meus Jogos" e clique no link de download para baixar o jogo no
                seu dispositivo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl">
                Quais são os requisitos mínimos de sistema para jogar na Uni
                Games?
              </AccordionTrigger>
              <AccordionContent>
                Cada jogo possui requisitos específicos de sistema. Esses
                requisitos estão listados na página do jogo, e é importante
                verificá-los antes de efetuar a compra para garantir a
                compatibilidade com seu dispositivo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-xl">
                Como posso me tornar um membro da Uni Games?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Para se tornar um membro da Uni Games, basta criar uma conta em
                nosso site. Clique em "Cadastre-se" na página inicial e preencha
                os dados solicitados. Assim que o cadastro estiver completo,
                você já terá acesso às vantagens exclusivas de membro, como
                descontos e ofertas especiais.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-xl">
                Há descontos ou promoções para membros da Uni Games?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Sim, frequentemente oferecemos descontos e promoções exclusivas
                para nossos membros. Fique atento ao nosso site e às
                notificações para aproveitar essas ofertas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-xl">
                Ainda estou com dúvidas...
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Estamos por aqui. Se precisa falar conosco, envie um email para{" "}
                <span className="cursor-pointer underline">
                  hello@unigames.com.br
                </span>
                , ou falar com a gente pelo WhatsApp clicando abaixo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex items-center justify-center pt-32 sm:hidden md:hidden lg:hidden xl:hidden">
        <div className="flex w-[1400px] items-center justify-around rounded-md bg-green-500 py-16 xl:w-[400px] xxl:w-[750px] exl:w-[950px]">
          <h2 className="text-3xl font-semibold xl:text-xl xxl:pl-10">
            Entre em contato conosco pelo nosso WhatsApp.
          </h2>

          <div className="flex items-center gap-6 xxl:pr-10">
            <ArrowRight size={28} />

            <Button
              variant="secondary"
              className="px-8 py-6 text-lg font-normal"
            >
              <WhatsappLogo />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pt-28">
        <Button
          variant="secondary"
          className="px-14 py-10 text-xl font-normal xxl:hidden exl:hidden exxl:hidden"
        >
          <WhatsappLogo />
          WhatsApp
        </Button>
      </div>
    </main>
  )
}
