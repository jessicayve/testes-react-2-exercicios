import { render, screen } from "@testing-library/react"
import  userEvent  from "@testing-library/user-event"
import Modal from "../components/Modal"


const activeModalMock ={
    sprites:{
        front_default: "https://urltest.com"
    },
    id:"1",
    name:"pokemon1",
    types:[
        {
            type:{
                name:"type1",
            }
        }
    ],
    weight: 1000,
    height: 20
}

const closeModalMock = jest.fn()

describe("teste modal", ()=>{
    test("testar renderização",()=>{
        render(<Modal activeModal={activeModalMock} closeModal={closeModalMock}/>)
        

        const image = screen.getByRole('img', {name: /pokemon1/i })
        const title = screen.getByText(/pokemon1/i)
        const weight = screen.getByText(/100/i)
        const height = screen.getByText(/2\.0 m/i)
        const id = screen.getByRole('heading', {name:/#1 pokemon1/i})
        const type = screen.getByText(/type/i)
        const button = screen.getByRole('button',{name:/❌/i})

        screen.logTestingPlaygroundURL()

        expect(image).toBeInTheDocument()
        expect(title).toBeInTheDocument()
        expect(weight).toBeInTheDocument()
        expect(height).toBeInTheDocument()
        expect(id).toBeInTheDocument()
        expect(type).toBeInTheDocument()
        expect(button).toBeInTheDocument()




    })
    test("testar fechar modal ", async ()=>{
        const user = userEvent.setup()
        render(<Modal activeModal={activeModalMock} closeModal={closeModalMock}/>)

        const button = screen.getByRole('button',{name:/❌/i})
        
        await user.click(button)

        expect(closeModalMock).toBeCalledTimes(1)
        expect(closeModalMock).toReturn()

    })
    
})


