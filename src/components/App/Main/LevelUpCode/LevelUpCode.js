import React from 'react';
import S from './LevelUpCode.module.css';

function LevelUpCode(){
	return(
		<section className={S.level_up_code_box}>
			<div className={S.level_up_code_content}>
				<div className={S.code_example}>
					<div className={S.code_content}>
						<pre className={S.code_content_first_line}>@SpringBootApplication  </pre>
						<pre className={S.code_content_second_line}>@RestController  </pre>
						<pre><span className={S.code_content_third_line}>public</span> class DemoApplication {"{"}  </pre>
						<pre className={S.code_content_fourth_line}>   <span className={S.code_content_fourth_line_part_1}>@GetMapping</span><span className={S.code_content_fourth_line_part_2}>("/helloworld")</span>  </pre>
						<pre>   <span className={S.code_content_fifth_line}>public</span> String hello() {"{"}  </pre>
						<pre>      return <span className={S.code_content_sixth_line}>"Hello World!"</span>;  </pre>
						<pre>   {"{"}  </pre>
						<pre>{"{"}  </pre>
					</div>
				</div>
				<div className={S.code_descriptions}>
					<div className={S.code_description_label}>
						Level up your Java™ code
					</div>
					<div className={S.code_description}>
						With Spring Boot in your app, just a few lines of code is all
						you need to start building services like a boss.
					</div>
					<div className={S.code_description_info}>
						New to Spring? Try our simple quickstart guide.
					</div>
				</div>
			</div>
		</section>

	);
}

export default LevelUpCode;