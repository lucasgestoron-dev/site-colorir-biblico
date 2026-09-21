import puppeteer from 'puppeteer';

(async () => {
  console.log('Iniciando captura de tela...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });

  // Assume que o vite está rodando na porta padrão (ou ajuste conforme necessário)
  const url = 'http://localhost:5173/matematica';
  
  try {
    console.log(`Navegando para ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    
    const outputPath = 'screenshot-desktop.png';
    await page.screenshot({ path: outputPath, fullPage: true });
    
    console.log(`Captura salva com sucesso em ${outputPath}`);
  } catch (error) {
    console.error('Erro ao capturar:', error);
  } finally {
    await browser.close();
  }
})();
