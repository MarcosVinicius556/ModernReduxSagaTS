/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRequest } from "./redux/repo/repoActions";
import { RepoState } from "./redux/rootReducer";

//CSS 
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const repoSelector = useSelector((rootReducer: RepoState) => rootReducer.repo);

  const repoNameRef: any = useRef();

  const handleFindReposByName = async () => {
    const repoName: string = repoNameRef.current.value
    const objToSend = { value: { repoName } }
    
    dispatch(loadRequest(objToSend))

    repoNameRef.current.value = '';
  }

  return (
    <section className={styles.mainContent}>
      <div className={styles.contentContainer}>
        <h1>Busca de Repositórios</h1>
        <div className={styles.searchContainer}>
          <span>
            <label>Nome do repositório</label>
            <input type="text" ref={repoNameRef} />
          </span>
          <button onClick={() => handleFindReposByName()}>Buscar</button>
        </div>
        <div className={styles.repoList}>
          <ul>
            {repoSelector.data?.map((repo) => (
              <li key={repo.id}>
                <h3> Nome do Repositório: ${repo.name} </h3>
                <span>
                  <p>Descrição: {repo.description}</p>
                  <p>Linguagem Principal: {repo.language}</p>
                  <p>Criado em: {repo.created_at.toLocaleString()}</p>
                </span>
                <a href={repo.git_url} target="_blank">Acessar</a> 
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default App
