package br.senai.sp.testepagina;

import java.util.concurrent.TimeUnit;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteLoginGameMania {

private  WebDriver driver;
	
	@Before
	public void Setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\chromedriver\\chromedriver.exe");
		
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}
	
	@Test
	public void TestarLogin() {
		driver.get("http://localhost:4200/");
		
		driver.findElement(By.id("link-menu")).click();
		
		// Primeiro Teste
		WebElement inputEmail = driver.findElement(By.id("email-cadastro"));
		
		WebElement inputSenha = driver.findElement(By.id("senha-cadastro"));
		
		WebElement botao = driver.findElement(By.id("enter"));
		
		String[] listaSenhas = {"batata", "batata", "ryan"};
				
		for(int tentativas = 0; tentativas < 3; tentativas++) {
			
			try {
				
				inputEmail.clear();
				inputSenha.clear();
				
				inputEmail.sendKeys("teste@mail.com");
				//inputSenha.sendKeys("batata");
				inputSenha.sendKeys(listaSenhas[tentativas]);
				botao.click();
				
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}	
		
		}
		
		
		WebElement mensagem = driver.findElement(By.id("mensagem"));
		
		System.out.println(mensagem.getText());
	}
}
