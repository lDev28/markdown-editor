import React, { useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import {
	FaBold,
	FaItalic,
	FaLink,
	FaCode,
	FaHeading,
	FaQuoteRight,
	FaImage
} from 'react-icons/fa'
import './styles.scss'

const App = () => {
	const [markdown, setMarkdown] = useState("## Let's start editing")

	const handleChange = (event) => {
		setMarkdown(event.target.value)
	}

	const markdownBody = useRef()

	const markdownSelect = () => {
		// console.log(markdownBody.current)
		markdownBody.current.select()
		markdownBody.current.setSelectionRange(0, 99999)
		document.execCommand('copy')
	}

	return (
		<div className='markdownEditor'>
			<div className='toolbar'>
				<button onClick={() => setMarkdown((prev) => prev + '\n# Heading')}>
					<FaHeading />1
				</button>
				<button
					onClick={() => setMarkdown((prev) => prev + '\n## Heading')}
				>
					<FaHeading />2
				</button>
				<button
					onClick={() => setMarkdown((prev) => prev + '\n### Heading')}
				>
					<FaHeading />3
				</button>
				<button
					onClick={() => setMarkdown((prev) => prev + '**bold text**')}
				>
					<FaBold />
				</button>
				<button
					onClick={() => setMarkdown((prev) => prev + '*italic text*')}
				>
					<FaItalic />
				</button>
				<button
					onClick={() =>
						setMarkdown((prev) => prev + '[Link](https://example.com)')
					}
				>
					<FaLink />
				</button>
				<button onClick={() => setMarkdown((prev) => prev + '`code`')}>
					<FaCode />
				</button>
				<button
					onClick={() => setMarkdown((prev) => prev + '\n> Blockquote')}
				>
					<FaQuoteRight />
				</button>
				<button
					onClick={() =>
						setMarkdown(
							(prev) =>
								prev + '\n![Alt Text](https://example.com/image.jpg)'
						)
					}
				>
					<FaImage />
				</button>
				<button
					onClick={() =>
						setMarkdown(
							(prev) =>
								prev +
								'\nLorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nulla ad unde accusamus, iusto voluptate esse dicta voluptatibus maiores quisquam eos debitis commodi? Voluptates quas iure obcaecati error earum quos.'
						)
					}
				>
					lorem
				</button>
				<button onClick={markdownSelect}>copy</button>
				<button onClick={() => setMarkdown('')}>clear</button>
			</div>
			<div className='workplace'>
				<div className='editor'>
					<textarea
						ref={markdownBody}
						className='editor-area'
						value={markdown}
						onChange={handleChange}
					/>
				</div>
				<div className='preview'>
					<ReactMarkdown>{markdown}</ReactMarkdown>
				</div>
			</div>
		</div>
	)
}

export default App
