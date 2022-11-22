import styles from '../styles/Home.module.css'

export default function content() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://gove.co/">Gove</a>
        </h1>

        <p className={styles.description}>
          Lets Start Learning{' '}
          <code className={styles.code}>Deck</code>
        </p>

        <div className={styles.grid}>
          <a href="https://goveindia.sharepoint.com/:x:/r/sites/Training/_layouts/15/Doc.aspx?sourcedoc=%7B846468F0-67FD-4456-98EC-E7010AD5D3DE%7D&file=Training%20Meeting%20Notes.xlsx&action=default&mobileredirect=true&CID=c44a981b-25e5-9ba6-1937-2c4941be317e&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMjEwMjgwNzIwMCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D" className={styles.card}>
            <h2>Communication &rarr;</h2>
            <p>Communication is important to express oneself.</p>
          </a>

          <a href="https://goveindia.sharepoint.com/:p:/r/sites/Training/_layouts/15/Doc.aspx?sourcedoc=%7B10CB4909-D12A-4048-B177-A9405C741A1D%7D&file=Requirements_V1.pptx&action=edit&mobileredirect=true&cid=f7ab7d62-3c8f-4bbd-99cf-d7f7a9ef850d" className={styles.card}>
            <h2>Requirements &rarr;</h2>
            <p>Requirements describe how the application should act for further.</p>
          </a>

          <a
            href="https://goveindia.sharepoint.com/:p:/r/sites/Training/_layouts/15/Doc.aspx?sourcedoc=%7B4769BD52-77CA-48A4-B3F8-1813296F51F5%7D&file=Quality%20Assurance.pptx&action=edit&mobileredirect=true&cid=5c574ecd-594b-40b4-8e7a-0c76c1b72fd7"
            className={styles.card}
          >
            <h2>Quality Assurance &rarr;</h2>
            <p>Helps build a software application that is usable, secure, robust.</p>
          </a>
          <a
            href="https://goveindia.sharepoint.com/:p:/r/sites/Training/_layouts/15/Doc.aspx?sourcedoc=%7B7D248E1B-5814-4B84-A901-64A9C47B747D%7D&file=Deployment.pptx&action=edit&mobileredirect=true&cid=63491fee-cf58-4b64-92f8-74a4ecd6c47c"
            className={styles.card}
          >
            <h2>Deployment &rarr;</h2>
            <p>A CI/CD pipeline gives developers the power to fail fast and recover even faster.</p>
          </a>
          <a
            href="https://goveindia.sharepoint.com/:p:/r/sites/Training/_layouts/15/Doc.aspx?sourcedoc=%7B1D419C9D-4596-4341-8094-C5C6F8D26A58%7D&file=Source%20Code%20Management.pptx&action=edit&mobileredirect=true&cid=328f9464-842a-4669-8fd4-ebb2a852200b"
            className={styles.card}
          >
            <h2>Source Code Management​ &rarr;</h2>
            <p>SCM is used to track modifications to a source code repository. </p>
          </a>

          <a
            href="https://goveindia.sharepoint.com/:p:/r/sites/Training/_layouts/15/Doc.aspx?sourcedoc=%7BE3B822FD-843A-44B2-87D8-819356D318CE%7D&file=Technology.pptx&action=edit&mobileredirect=true&cid=f1e341c9-a70e-4af2-b9ba-f6c83141f082"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Technology &rarr;</h2>
            <p>
            Software development can bring more feature-rich and innovative products
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Powered by Gove
          <span className={styles.logo}>
          </span>
      </footer>
    </div>
  )
}
