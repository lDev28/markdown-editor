import './App.scss'
import MarkdownEditor from './MarkdownEditor'

function App() {
	return (
		<>
			<div className='headings'>
				<h2>Write your Markdown here</h2>
				<h2>Preview</h2>
			</div>
			<MarkdownEditor />
		</>
	)
}

export default App
