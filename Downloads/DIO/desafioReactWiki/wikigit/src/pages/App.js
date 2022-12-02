import gitHubLogo from '../assets/github.png'
import { Container } from './styles'
import { Input } from '../components/Input'
import { ItemRepo } from '../components/ItemRepo'
import { Button } from '../components/Button'
import { api } from '../services/api'
import { useState } from 'react'

function App() {

    const [currentRepo, setCurrentRepo] = useState('');
    const [repo, setRepos] = useState([]);

    const handleSearchRepo = async () => {
        const { data } = await api.get(`repo/${currentRepo}`)

        if (data.id) {
            const isExist = repo.find(repo => repo.id === data.id)
            if (!isExist) {
                setRepos(prev => [...prev, data])
                setCurrentRepo('')
                return
            }

        }
    }

    const handleremoveRepo = (id) => {
        const list = []
        for (let i = 0; i < repo.length; i++) {
            if (repo[i].id !== id) {
                list.push(repo[i])
                console.log(list)
            }
        }
        setRepos(list)
    }

    return (
        <Container>
            <img src={gitHubLogo} width={100} height={100} alt="GitHub Logo" />
            <p>Pesquise pelo usuário / nome do repositório</p>
            <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
            <Button onClick={handleSearchRepo} />
            {repo.map(repo => <ItemRepo handleremoveRepo={handleremoveRepo} repo={repo} />)}
        </Container>
    )
}



export default App;