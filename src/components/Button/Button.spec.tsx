import { render, screen } from "@testing-library/react"
import { userEvent } from '@testing-library/user-event'
import { Button } from "."

const VARIANT_DEFAULT_CLASSES = 'bg-blue-600 hover:bg-blue-700 text-blue-100'
const VARIANT_DANGER_CLASSES = 'bg-red-600 hover:bg-red-700 text-red-100'
const VARIANT_GHOST_CLASSES = 'bg-slate-300 hover:bg-slate-400 text-slate-950'

const SIZE_MD_CLASSES = 'text-base/tight py-2 px-4 rounded-md [&_svg]:w-4 [&_svg]:h-4 gap-2'
const SIZE_SM_CLASSES = 'text-xs/tight py-1 px-2 rounded-sm [&_svg]:w-3 [&_svg]:h-3 gap-1'
const SIZE_LG_CLASSES = 'text-lg/tight py-4 px-6 rounded-lg [&_svg]:w-5 [&_svg]:h-5 gap-3'
const DISABLED_CLASSES = 'disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed'

describe('<Button />', () => {
  describe('props padrão e JSX', () => {
    test('deve renderizar o botão com props padrão (apenas com children)', async () => {
      render(<Button>Enviar formulário</Button>)

      const button = screen.getByRole('button', { name: 'Enviar formulário' })

      expect(button).toHaveClass(VARIANT_DEFAULT_CLASSES)
      expect(button).toHaveClass(SIZE_MD_CLASSES)
    })
    
    test('verifica se as propriedades padrão do JSX funcionam corretamente', async () => {
      const handleClick = vi.fn()
      render(<Button onClick={handleClick} type="submit" aria-hidden="false">Enviar formulário</Button>)

      const button = screen.getByText('Enviar formulário')

      await userEvent.click(button)
      await userEvent.click(button)

      expect(handleClick).toHaveBeenCalledTimes(2)
      expect(button).toHaveAttribute('type', 'submit')
      expect(button).toHaveAttribute('aria-hidden', 'false')
    })
  })
  
  describe('variants (cores)', () => {
    test('checa se default aplica a cor correta', async () => {
      render(<Button variant="default" title="o botão">Enviar formulário</Button>)

      const button = screen.getByTitle('o botão')

      expect(button).toHaveClass(VARIANT_DEFAULT_CLASSES)
    })
    
    test('checa se danger aplica a cor correta', async () => {
      render(<Button variant="danger" title="o botão">Enviar formulário</Button>)

      const button = screen.getByTitle('o botão')

      expect(button).toHaveClass(VARIANT_DANGER_CLASSES)
    })

    test('checa se ghost aplica a cor correta', async () => {
      render(<Button variant="ghost" title="o botão">Enviar formulário</Button>)

      const button = screen.getByTitle('o botão')

      expect(button).toHaveClass(VARIANT_GHOST_CLASSES)
    })

  })

  describe('size (tamanho)', () => {
    test('tamanho sm deve ser pequeno', async () => {
      render(<Button size="sm" title="o botão">Enviar formulário</Button>)

      const button = screen.getByTitle('o botão')

      expect(button).toHaveClass(SIZE_SM_CLASSES)
    })

    test('tamanho md deve ser médio', async () => {
      render(<Button size="md" title="o botão">Enviar formulário</Button>)

      const button = screen.getByTitle('o botão')

      expect(button).toHaveClass(SIZE_MD_CLASSES)
    })

    test('tamanho lg deve ser grande', async () => {
      render(<Button size="lg" title="o botão">Enviar formulário</Button>)

      const button = screen.getByTitle('o botão')

      expect(button).toHaveClass(SIZE_LG_CLASSES)
    })
  })

  describe('disable', () => {
    test('classes para estado desativado estão corretas', async () => {
      render(<Button disabled>Enviar formulário</Button>)

      const button = screen.getByRole('button', { name: 'Enviar formulário' })

      expect(button).toHaveClass(DISABLED_CLASSES)
      expect(button).toBeDisabled()
    })
  })
})