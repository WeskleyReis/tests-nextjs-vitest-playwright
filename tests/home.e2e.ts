import { test, expect } from '@playwright/test'

test.describe('<Home /> (E2E)', () => {
  // Renderização
  test.describe('Renderização', () => {
    test('deve ter o title correto', async ({ page }) => {
      await page.goto('/')
    })
  })

  // Criação
  // Exclusão
  // Erros
})